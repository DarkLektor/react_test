function setChangeLocale(locale = {url: './clothes.json', lang: 'en'}, action) {
    switch (action.type) {
        case 'CHANGE_LOC_RU':
            return {
                url: './ru-clothes.json',
                lang: 'ru'
            }
        case 'CHANGE_LOC_EN':
            return {
                url: './clothes.json',
                lang: 'en'
            }
        default:
            return locale
    }
}

export default setChangeLocale;