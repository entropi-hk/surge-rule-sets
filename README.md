# Surge DOMAIN-SETs for blocking ads / trackers / malware etc.

[RULE-SETs](#rulesets) | [Blocklist DOMAIN-SETs](#blocklists)

This repo provides DOMAIN-SETs for usage in blocklists, ported from reliable and regularly updated sources and converts them into lists that are compatible for use with [Surge](https://nssurge.com).

It also provides other useful RULE-SETs.

For example, the existing 'SYSTEM' RULE-SET provided by Surge is very basic and doesn't cover nearly as many domains as it should.
And example of why you may need this is if you are using Cloudflare Warp as a Wireguard proxy, macOS Sequoia may have issues with push notifications, so to ensure proper functioning of push notifications on Sequoia, you should use a DIRECT policy for Apple's APNs servers.  

The blocklists are kept up to date on a daily basis using a simple script. And we will be updating our list of RULE-SETs when we notice other issues to help you improve functionality and avoid bugs.

Regarding the need for the blocklist modifications, Surge uses '.' prefixes for wildcard domains, so this simply converts the ready-made wildcard lists from '*.' prefixes to '.'

There's no need to reinvent the wheel, so we just built upon the shoulder's of giants... All credits to [hagezi](https://github.com/hagezi/dns-blocklists/tree/main) and [OISD](https://oisd.nl) and their sources for the blocklists.

Make sure to check out hagezi's repo and OISD website for more info for more details on the blocklists!

## Rulesets

**These RULE-SETs contain Apple's APN server IPs v4 & v6, we recommend using the DIRECT policy. macOS and iOS versions available. Ensure you select 'No Resolve' for iOS version to prevent DNS resolution.**
- [apple-apns-ios.txt](rule-sets/apple-apns-ios.txt?raw=1)
- [apple-apns-macos.txt](rule-sets/apple-apns-macos.txt?raw=1)

## Blocklists

**The following blocklists are converted from above mentioned sources, REJECT these DOMAIN-SETs**:

- [hagezi-light.txt](blocklist-domain-sets/hagezi-light.txt?raw=1)
- [hagezi-multi.txt](blocklist-domain-sets/hagezi-multi.txt?raw=1)
- [hagezi-pro.txt](blocklist-domain-sets/hagezi-pro.txt?raw=1)
- [hagezi-pro-mini.txt](blocklist-domain-sets/hagezi-pro-mini.txt?raw=1)
- [hagezi-pro-plus.txt](blocklist-domain-sets/hagezi-pro-plus.txt?raw=1)
- [hagezi-pro-plus-mini.txt](blocklist-domain-sets/hagezi-pro-plus-mini.txt?raw=1)
- [hagezi-ultimate.txt](blocklist-domain-sets/hagezi-ultimate.txt?raw=1)
- [hagezi-ultimate-mini.txt](blocklist-domain-sets/hagezi-ultimate-mini.txt?raw=1)
- [hagezi-fake.txt](blocklist-domain-sets/hagezi-fake.txt?raw=1)
- [hagezi-pop-up-ads.txt](blocklist-domain-sets/hagezi-pop-up-ads.txt?raw=1)
- [hagezi-tif.txt](blocklist-domain-sets/hagezi-tif.txt?raw=1)
- [hagezi-tif-medium.txt](blocklist-domain-sets/hagezi-tif-medium.txt?raw=1)
- [hagezi-tif-mini.txt](blocklist-domain-sets/hagezi-tif-mini.txt?raw=1)
- [hagezi-doh-vpn-proxy-bypass.txt](blocklist-domain-sets/hagezi-doh-vpn-proxy-bypass.txt?raw=1)
- [hagezi-doh.txt](blocklist-domain-sets/hagezi-doh.txt?raw=1)
- [hagezi-no-safe-search.txt](blocklist-domain-sets/hagezi-no-safe-search.txt?raw=1)
- [hagezi-dynamic-dns.txt](blocklist-domain-sets/hagezi-dynamic-dns.txt?raw=1)
- [hagezi-badware-hosters.txt](blocklist-domain-sets/hagezi-badware-hosters.txt?raw=1)
- [hagezi-anti-piracy.txt](blocklist-domain-sets/hagezi-anti-piracy.txt?raw=1)
- [hagezi-gambling.txt](blocklist-domain-sets/hagezi-gambling.txt?raw=1)
- [hagezi-gambling-medium.txt](blocklist-domain-sets/hagezi-gambling-medium.txt?raw=1)
- [hagezi-gambling-mini.txt](blocklist-domain-sets/hagezi-gambling-mini.txt?raw=1)
- [hagezi-native-trackers-amazon.txt](blocklist-domain-sets/hagezi-native-trackers-amazon.txt?raw=1)
- [hagezi-native-trackers-apple.txt](blocklist-domain-sets/hagezi-native-trackers-apple.txt?raw=1)
- [hagezi-native-trackers-huawei.txt](blocklist-domain-sets/hagezi-native-trackers-huawei.txt?raw=1)
- [hagezi-native-trackers-microsoft.txt](blocklist-domain-sets/hagezi-native-trackers-microsoft.txt?raw=1)
- [hagezi-native-trackers-tiktok.txt](blocklist-domain-sets/hagezi-native-trackers-tiktok.txt?raw=1)
- [hagezi-native-trackers-tiktok-aggressive.txt](blocklist-domain-sets/hagezi-native-trackers-tiktok-aggressive.txt?raw=1)
- [hagezi-native-trackers-lg-web-os.txt](blocklist-domain-sets/hagezi-native-trackers-lg-web-os.txt?raw=1)
- [hagezi-native-trackers-vivo.txt](blocklist-domain-sets/hagezi-native-trackers-vivo.txt?raw=1)
- [hagezi-native-trackers-oppo-realme.txt](blocklist-domain-sets/hagezi-native-trackers-oppo-realme.txt?raw=1)
- [hagezi-native-trackers-oppo-xiaomi.txt](blocklist-domain-sets/hagezi-native-trackers-oppo-xiaomi.txt?raw=1)
- [oisd-small.txt](blocklist-domain-sets/oisd-small.txt?raw=1)
- [oisd-big.txt](blocklist-domain-sets/oisd-big.txt?raw=1)
- [oisd-nsfw.txt](blocklist-domain-sets/oisd-nsfw.txt?raw=1)

