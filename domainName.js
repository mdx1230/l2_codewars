function domainName(url){
  
    // Небольшой список многосоставных TLD
    const multiTLDs = ['co.uk', 'com.au', 'gov.uk', 'co.jp'];

    //имя хоста без протокола и пути
    const host = url.replace(/^https?:\/\//, '')
                    .replace(/^www\./, '')
                    .split('/')[0];

    // проверка сложных окончаний
    for (const tld of multiTLDs) {
        if (host.endsWith(tld)) {
            // пример: super.test.co.uk -> ["super","test","co","uk"]
            const parts = host.split('.');
            // перед "co.uk" стоит нужное имя
            return parts[parts.length - (tld.split('.').length + 1)];
        }
    }

    // Обычный случай: example.com -> ["example","com"]
    return host.split('.')[0];
}
