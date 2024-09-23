import { mkdir, rm, writeFile } from 'node:fs/promises';

const outDir = new URL('./blocklist-domain-sets/', import.meta.url);
const lists = [
  ['hagezi-light', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/light.txt'],
  ['hagezi-multi', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/multi.txt'],
  ['hagezi-pro', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.txt'],
  ['hagezi-pro-mini', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.mini.txt'],
  ['hagezi-pro-plus', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.plus.txt'],
  ['hagezi-pro-plus-mini', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/pro.plus.mini.txt'],
  ['hagezi-ultimate', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/ultimate.txt'],
  ['hagezi-ultimate-mini', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/ultimate.mini.txt'],
  ['hagezi-fake', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/fake.txt'],
  ['hagezi-pop-up-ads', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/popupads.txt'],
  ['hagezi-tif', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/tif.txt'],
  ['hagezi-tif-medium', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/tif.medium.txt'],
  ['hagezi-tif-mini', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/tif.mini.txt'],
  ['hagezi-doh-vpn-proxy-bypass', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/doh-vpn-proxy-bypass.txt'],
  ['hagezi-doh', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/doh.txt'],
  ['hagezi-no-safe-search', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/nosafesearch.txt'],
  ['hagezi-dynamic-dns', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/dyndns.txt'],
  ['hagezi-badware-hosters', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/hoster-onlydomains.txt'],
  ['hagezi-anti-piracy', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/anti.piracy.txt'],
  ['hagezi-gambling', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/gambling.txt'],
  ['hagezi-gambling-medium', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/gambling.medium.txt'],
  ['hagezi-gambling-mini', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/gambling.mini.txt'],
  ['hagezi-native-trackers-amazon', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.amazon.txt'],
  ['hagezi-native-trackers-apple', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.apple.txt'],
  ['hagezi-native-trackers-huawei', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.huawei.txt'],
  ['hagezi-native-trackers-microsoft', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.winoffice.txt'],
  ['hagezi-native-trackers-tiktok', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.tiktok.txt'],
  ['hagezi-native-trackers-tiktok-aggressive', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.tiktok.extended.txt'],
  ['hagezi-native-trackers-lg-web-os', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.lgwebos.txt'],
  ['hagezi-native-trackers-vivo', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.vivo.txt'],
  ['hagezi-native-trackers-oppo-realme', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.oppo-realme.txt'],
  ['hagezi-native-trackers-oppo-xiaomi', 'https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/wildcard/native.xiaomi.txt'],
  ['oisd-small', 'https://small.oisd.nl/domainswild'],
  ['oisd-big', 'https://big.oisd.nl/domainswild'],
  ['oisd-nsfw', 'https://nsfw.oisd.nl/domainswild'],
];

function getList(url) {
  return fetch(url).then((response) => response.text())
}

function transformList(text) {
  return text.replaceAll(/^[^*].*$/gm, '').replaceAll('*', '');
}

async function main() {
  try {
    await rm(outDir, { force: true, recursive: true });
    await mkdir(outDir, { recursive: true });

    for (const [name, url] of lists) {
      const content = transformList(await getList(url));
      await writeFile(new URL(`${name}.txt`, outDir), content.trim(), { flag: 'w' });
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();