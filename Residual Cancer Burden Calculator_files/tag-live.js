(function(networkId) {
var cacheLifetimeDays = 30;

var customDataWaitForConfig = [
  { on: function() { return Invoca.Client.parseCustomDataField("adobeA", "Last", "URLParam", ""); }, paramName: "adobeA", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("calling_page", "Last", "JavascriptDataLayer", "location.href"); }, paramName: "calling_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("channels", "Last", "URLParam", ""); }, paramName: "channels", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("cmpid", "Last", "URLParam", ""); }, paramName: "cmpid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gclid", "Last", "URLParam", ""); }, paramName: "gclid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("intcmp", "Last", "URLParam", ""); }, paramName: "intcmp", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("invoca_city", "Last", "URLParam", ""); }, paramName: "invoca_city", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("invoca_region", "Last", "URLParam", ""); }, paramName: "invoca_region", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("invsrc", "Last", "URLParam", ""); }, paramName: "invsrc", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("k_clickid", "Last", "URLParam", ""); }, paramName: "k_clickid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("landing_page", "First", "JavascriptDataLayer", "location.href"); }, paramName: "landing_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("mda_ad_campaign_name", "Last", "URLParam", ""); }, paramName: "mda_ad_campaign_name", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("msclkid", "Last", "URLParam", ""); }, paramName: "msclkid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("phone_type", "Last", "URLParam", ""); }, paramName: "phone_type", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("referrer", "Last", "URLParam", ""); }, paramName: "referrer", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("tactic_type", "Last", "URLParam", ""); }, paramName: "tactic_type", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("ua", "Last", "URLParam", ""); }, paramName: "ua", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_medium", "Last", "URLParam", ""); }, paramName: "utm_medium", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_medium || null; } },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_source", "Last", "URLParam", ""); }, paramName: "utm_source", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_source || null; } }
];

var defaultCampaignId = null;

var destinationSettings = {
  paramName: null
};

var numbersToReplace = null;

var organicSources = true;

var reRunAfter = 2000;

var requiredParams = null;

var resetCacheOn = ['invsrc', 'PPCPN', 'utm_source', 'utm_medium', 'msclkid'];

var waitFor = 0;

var customCodeIsSet = (function() {
  Invoca.Client.customCode = function(options) {
    // params to be stored client side as part of the SSA migration
// this list must be kept in sync with any use of readInvocaData
try {
  Invoca.Tools.allowedClientSideParams(['gclid', 'gcm_uid']);

} catch (error) {
  console.log(error);
}
// This sets campaign based on referrer
function getFallbackCampaignId() {
  
  //Define Fallback Campaign by parsing referrer
  var fallbackCampaignSearch = Invoca.Tools.parseReferrer({
    "google.com"    : "organic",
    "bing.com"      : "organic",
    "ask.com"       : "organic",
    "yahoo.com"     : "organic",
    "aol.com"       : "organic",
    "partner1.com"  : "<campaignID>", // Can augment this list to include any referrer : campaignID mapping
    ""              : "direct"
  }, "organic", null, "topLevelDomain"); //Defaults to "organic" if mapping is not found

  return fallbackCampaignSearch;
}

// Creates the Invoca campaign ID mapping
function buildCampaignMapping(){
  
  //Define entry method if paid source, else return is reflective of mapping from getFallbackCampaignId function 
  var mapping = Invoca.Tools.readUrl("invsrc") || getFallbackCampaignId();

  //Create Main + Second Hospital Line Campign Mapping
  var campaign1 = mapping + "_main"; //Maps to main
  var campaign2 = mapping + "_second"; //Maps to second
  var campaign3 = mapping + "_vanity1"; //Maps to vanity number 1
  var campaign4 = mapping + "_vanity2"; //Maps to vanity number 2
  var campaign5 = mapping + "_ab"; //Maps to main for Appointment Bar
  var campaign6 = mapping + "_breastdi"; //Maps to Breast Diagnostic Imaging

  var numbersToReplace = {
    "1-877-632-6789": campaign1, //Forward to the Main Line
    "1-713-745-9940": campaign1, //Forward to the Main Line
    "1-866-632-4782": campaign2, //Forward to the Second Line
    "1-844-581-3951": campaign3, //Forward to the Variant Line (This Will Change Based on the Varient Number Used)
    "1-855-873-4321": campaign4, //Forward to the Variant Line (This Will Change Based on the Varient Number Used)
    "1-888-641-7709": campaign5,  //Forward to the Main Line for calls from Appointment Bar
    "1-713-792-7171": campaign6  //Forward Breast Diagnostic Imaging
  };

  return numbersToReplace;
}

//Get Invoca Campaign ID Mapping if new session or carry campaign from current session
var numberToCampaignMapping = Invoca.Tools.readInvocaData('numberCampaignMapping', buildCampaignMapping());

//Capture the Adobe Marketing Cloud Visitor ID
var aaId = Visitor.getInstance("13664673527846410A490D45@AdobeOrg").getMarketingCloudVisitorID() || "noAAID"; 

//Capture the Referring Domain Information of the User
var referrerCapture = Invoca.Tools.readInvocaData("referrer", document.referrer) || 'direct';

//Grabs user agent from user
var userAgent = window.navigator.userAgent;

// Custom integration options
options.numberToReplace = numberToCampaignMapping;
options.poolParams.adobeA = aaId;
options.poolParams.referrer = referrerCapture;
options.poolParams.ua = userAgent;
options.poolParams.numberCampaignMapping = numberToCampaignMapping;

//options.onComplete = updateTel;

function useGCM() {
  if (Invoca.Tools.readUrl("gclid") || Invoca.Tools.readInvocaData("gclid")) {
    return null;
  } else {
    return Invoca.Tools.readUrl("gcm_uid") || 
           Invoca.Tools.readCookie("gcm_uid") ||
           Invoca.Tools.readInvocaData("gcm_uid");
  }
}

options.poolParams.gcm_uid = useGCM();
return options;
  };

  return true;
})();

var generatedOptions = {
  autoSwap:            false,
  cookieDays:          cacheLifetimeDays,
  country:             null,
  defaultCampaignId:   defaultCampaignId,
  destinationSettings: destinationSettings,
  disableUrlParams:    ['gcm_uid'],
  doNotSwap:           [],
  maxWaitFor:          waitFor,
  networkId:           networkId || null,
  numberToReplace:     numbersToReplace,
  organicSources:      organicSources,
  poolParams:          {},
  reRunAfter:          reRunAfter,
  requiredParams:      requiredParams,
  resetCacheOn:        resetCacheOn,
  waitForData:         customDataWaitForConfig
};

Invoca.Client.startFromWizard(generatedOptions);

})(1299);
