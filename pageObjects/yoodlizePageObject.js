module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        // Home Page
        homePage: 'div[class="navbar-header"]',
        seeAllTools: 'div[data-reactid="84"]',
        objectSlider: 'div[class="slider sc-btzYZH lgYiAd sc-bwzfXH loXcNn sc-bdVaJa iHZvIS"]',
        item: 'div[data-reactid="92"]',
        itemName: 'div[class="sc-dNLxif hHahiq sc-gqjmRU koYdEt"]',
        seeAllTools: 'div[data-reactid="84"]',
        seeAllToysGames: 'div[data-reactid="130"]',
        seeAllSportGoods: 'div[data-reactid="173"]',
        seeAllBusEquip: 'div[data-reactid="228"]',
        seeAllElectronics: 'div[data-reactid="271"]',
        seeAllHomeLawnGarden: 'div[data-reactid="319"]',
        seeAllFashion: 'div[data-reactid="366"]',
        seeAllOutdoorGear: 'div[data-reactid="414"]',
        seeAllExperiences: 'div[data-reactid="461"]',
        seeAllParty: 'div[data-reactid="505"]',
        seeAllProperties: 'div[data-reactid="549"]',
        seeAllRVs: 'div[data-reactid="588"]',
        // Home Page Circle Categories
        businessEquipment: 'div[data-reactid="629"]',
        electronics: 'div[data-reactid="634"]',
        recreationalVehicles: 'div[data-reactid="639"]',
        fashion: 'div[data-reactid="645"]',
        homeAndGarden: 'div[data-reactid="650"]',
        outdoorGear: 'div[data-reactid="655"]',
        partyEquipment: 'div[data-reactid="661"]',
        properties: 'div[data-reactid="666"]',
        experiences: 'div[data-reactid="671"]',
        sportingEquipment: 'div[data-reactid="677"]',
        tools: 'div[data-reactid="682"]',
        toysAndGames: 'div[data-reactid="687"]',
        // Search
        searchField: 'input[type="text"]',
        searchBtn: 'button[class="sc-kPVwWT bwXMGY sc-ifAKCX kzsifC"]',
        browse: 'a[data-reactid="33"]',
        results: 'div[class="col-md-12 col-sm-12 col-xs-12"]',
        // Search Filters
        showMap: 'img[class="sc-qrIAp hAcQer"]',
        searchWithMap: 'ins[class="iCheck-helper"]',
        mapZoomIn: 'button[title="Zoom in"]',
        mapZoomOut: 'button[title="Zoom out"]',
        categories: { selector: '//button[text()="Categories"]', locateStrategy: 'xpath' },
        catBusinessEquipment: { selector: '//button[text()="Business Equipment"]', locateStrategy: 'xpath' },
        catExperiences: { selector: '//button[text()="Experiences"]', locateStrategy: 'xpath' },
        catHomeGarden: { selector: '//button[text()="Home and Garden"]', locateStrategy: 'xpath' },
        catPartyEquipment: { selector: '//button[text()="Party Equipment"]', locateStrategy: 'xpath' },
        catRVs: { selector: '//button[text()="Recreational Vehicles"]', locateStrategy: 'xpath' },
        catTools: { selector: '//button[text()="Tools"]', locateStrategy: 'xpath' },
        catElectronics: { selector: '//button[text()="Electronics"]', locateStrategy: 'xpath' },
        catFashion: { selector: '//button[text()="Fashion"]', locateStrategy: 'xpath' },
        catOutdoorGear: { selector: '//button[text()="Outdoor Gear"]', locateStrategy: 'xpath' },
        catProperties: { selector: '//button[text()="Properties"]', locateStrategy: 'xpath' },
        catSportingEquipment: { selector: '//button[text()="Sporting Equipment"]', locateStrategy: 'xpath' },
        catToysGames: { selector: '//button[text()="Toys and Games"]', locateStrategy: 'xpath' },
        dates: { selector: '//button[text()="Dates"]', locateStrategy: 'xpath' },
        dropOff: 'input[name="startDate"]',
        pickUp: 'input[name="endDate"]',
        applyButton: 'button[class="sc-hmXxxW knXwTd"]',
        price: { selector: '//button[text()="Price"]', locateStrategy: 'xpath' },
        minPrice: '(//input[@placeholder="Optional"])[1]',
        maxPrice: '(//input[@placeholder="Optional"])[2]',
        sort: { selector: '//button[text()="Sort"]', locateStrategy: 'xpath' },
        sortHighLow: { selector: '//button[text()="High - Low"]', locateStrategy: 'xpath' },
        sortLowHigh: { selector: '//button[text()="Low - High"]', locateStrategy: 'xpath' },
        // oneStar: '',
        // twoStars: '',
        // threeStars: '',
        // fourStars: '',
        // fiveStars: '',
        // firstItem: '',
        // List Item: Guide Me
        listProductLoggedOut: 'a[href="/login"]',
        listProductLoggedIn: 'a[href="/become-a-host?mode=new"]',
        guideMe: { selector: '//button[text()="GUIDE ME"]', locateStrategy: 'xpath' },
        step1Title: 'input[name="title"]',
        step1Description: 'textarea[name="description"]',
        step1CategorySelect: 'select[class="sc-emmjRN hdbqCY sc-hMqMXs kEZEVA"]',
        step1Next: 'button[class="sc-kPVwWT fqLuIb sc-ifAKCX kzsifC"]',
        step2UploadPhoto: 'input[class="dz-hidden-input"]',
        step2Next: 'button[class="sc-kPVwWT fqLuIb sc-ifAKCX kzsifC"]',
        step3Address1: 'input[name="street"]',
        step3Address2: 'input[name="buildingName"]',
        step3City: 'input[name="city"]',
        step3State: 'input[name="state"]',
        step3Zip: 'input[name="zipcode"]',
        step3Next: 'button[class="sc-kPVwWT fqLuIb sc-ifAKCX kzsifC"]',
        // List Item: I Got It!
        title: 'input[type="text"]',
        description: 'textarea[class="sc-gHboQg bQZZfx"]',
        fashionPick: { selector: '//option[text()="Fashion"]', locateStrategy: 'xpath' },
        businessEquipmentPick: { selector: '//option[text()="Business Equipment"]', locateStrategy: 'xpath' },
        recreationalVehiclesPick: { selector: '//option[text()="Recreational Vehicles"]', locateStrategy: 'xpath' },
        toolsPick: { selector: '//option[text()="Tools"]', locateStrategy: 'xpath' },
        electronicsPick: { selector: '//option[text()="Electronics"]', locateStrategy: 'xpath' },
        partyEquipmentPick: { selector: '//option[text()="Party Equipment"]', locateStrategy: 'xpath' },
        homeAndGardenPick: { selector: '//option[text()="Home and Garden"]', locateStrategy: 'xpath' },
        outdoorGearPick: { selector: '//option[text()="Outdoor Gear"]', locateStrategy: 'xpath' },
        sportingEquipmentPick: { selector: '//option[text()="Sporting Equipment"]', locateStrategy: 'xpath' },
        propertiesPick: { selector: '//option[text()="Properties"]', locateStrategy: 'xpath' },
        experiencesPick: { selector: '//option[text()="Experiences"]', locateStrategy: 'xpath' },
        toysAndGamesPick: { selector: '//option[text()="Toys and Games"]', locateStrategy: 'xpath' },
        nextBtn: 'button[class="sc-kPVwWT fqLuIb sc-ifAKCX kzsifC"]',
        streetAddress: 'input[name="street"]',
        city: 'input[name="city"]',
        state: 'input[name="state"]',
        zipcode: 'input[name="zipcode"]',
        dayPicker: 'div[class="DayPicker-Day"]',
        dailyRate: 'input[type="dailyRate"]',
        rules: 'input[class="_3wXqb',
        addBtn: { selector: '//button[text()="ADD"]', locateStrategy: 'xpath' },
        // Profile
        avatarIcon: 'a[role="button"]',
        dashboard: 'div[data-reactid="56"]',
        editProfile: 'div[data-reactid="60"]',
        accountSetting: 'div[data-reactid="64"]',
        logout: 'div[data-reactid="69"]',
        inbox: { selector: '//div[text()="Inbox"]', locateStrategy: 'xpath' },
        listing: { selector: '//div[text()="Listing"]', locateStrategy: 'xpath' },
        reviews: { selector: '//div[text()="Reviews"]', locateStrategy: 'xpath' },
        profile: { selector: '//div[text()="Profile"]', locateStrategy: 'xpath' },
        account: { selector: '//div[text()="Account"]', locateStrategy: 'xpath' },
        // Edit Profile
        firstName: 'input[name="firstName"]',
        lastName: 'input[name="lastName"]',
        gender: { selector: '//option[text()="Gender"]', locateStrategy: 'xpath' },
        malePick: { selector: '//option[text()="Male"]', locateStrategy: 'xpath' },
        femalePick: { selector: '//option[text()="Female"]', locateStrategy: 'xpath' },
        otherPick: { selector: '//option[text()="Other"]', locateStrategy: 'xpath' },
        month: { selector: '//option[text()="5"]', locateStrategy: 'xpath' },
        day: { selector: '//option[text()="30"]', locateStrategy: 'xpath' },
        year: { selector: '//option[text()="1985"]', locateStrategy: 'xpath' },
        emailAddress: 'input[name="email"]',
        language: { selector: '//option[text()="English"]', locateStrategy: 'xpath' },
        currency: { selector: '//option[text()="USD"]', locateStrategy: 'xpath' },
        location: 'input[name="location"]',
        describeY: 'textarea[name="info"]',
        // Item View Page
        firstItem: 'div[data-reactid="114"]',
        itemTitle: 'div[class="sc-dNLxif hHahiq sc-gqjmRU koYdEt"]',
        itemImage: 'img[class="sc-gqPbQI lkKrpm"]',
        itemDescription: 'div[class="sc-bAeIUo TzWXY sc-dNLxif fdMhjG sc-gqjmRU iMgiCn"]',
        rentalRules: 'li[class="sc-hORach cfqFhl"]',
        ownerName: 'div[class="sc-dNLxif kLnwCQ sc-gqjmRU grDSVw"]',
        contactOwner: 'div[class="sc-dNLxif gXXneo sc-gqjmRU grDSVw"]',
        itemRate: 'div[class="sc-dNLxif iAGaBz sc-gqjmRU gbowmt',
        pickupDate: 'input[id="It is Start date id"]',
        dropoffDate: 'input[id="It is End date id"]',
        requestButton: 'button[class="sc-kPVwWT gnFPkq sc-ifAKCX kzsifC"]',
        favorite: 'div[class="sc-gojNiO cBrEyX"]',
        nearbyItems: 'div[class="sc-dNLxif OxNuC sc-gqjmRU dzDRCD"]',
        // Account
        accountSettings: 'a[href="/user/payout/"]',
        addPayout: 'a[href="/user/addpayout"]',
        country: 'select[name="country"]',
        selectUS: 'option[value="US"]',
        address1: 'input[name="address1"]',
        address2: 'input[name="address2"]',
        city: 'input[name="city"]',
        state: 'input[name="state"]',
        zipCode: 'input[name="zipcode"]',
        nextButton: 'span[data-reactid="138"]',
        payPalSelect: 'input[value="1"]',
        bankSelect: 'input[value="2"]',
        nextButton2: 'button[class="_1_L8P _2qtm_ _1PSHw btn btn-default"]',
        backButton: 'button[class="_1_L8P _1PSHw _1wYU2 uPEPu btn btn-default"]',
        payPalEmail: 'input[name="payEmail"]',
        selectCurrency: 'select[name="currency"]',
        selectUSD: 'option[value="USD"]',
        addPayout2: 'button[class="_1_L8P _1PSHw _2qtm_ btn btn-default"]',
        accountFirstName: 'input[name="firstname"]',
        accountLastName: 'input[name="lastname"]',
        routingNumber: 'input[name-"routingNumber"]',
        accountNumber: 'input[name="accountNumber"]',
        confirmAccountNumber: 'input[name="confirmAccountNumber"]',
        ssn4Digits: 'input[name="ssn4Digits"]',
        finishButton: 'button[class="_1_L8P _2qtm_ _1PSHw _2K7JB btn btn-default"]',
        // Request an Item
        pickupDate: 'input[id="It is Start date id"]',
        dropoffDate: 'input[id="It is End date id"]',
        requestButton: 'button[class="sc-kPVwWT gnFPkq sc-ifAKCX kzsifC"]',
        confirmThingsNext: 'button[class="_1IEeC _3Fc0g btn btn-default"]',
        uploadPhoto: 'input[class="dz-hidden-input"]',
        continueButton: 'button[class="_1_9c0 _26mrU btn btn-default"]',
        resendEmailButton: 'button[class="_25o3z _3n_Fi btn btn-default"]',
        // *** can't fill the rest until email verification is working ***
        // Sign Up
        signup: { selector: '//div[text()="Sign up"]', locateStrategy: 'xpath' },
        // Login / Logout
        login: { selector: '(//a[@href="#"])[1]', locateStrategy: 'xpath' },
        loginTitle: 'div[class="_2IZbL"]',
        emailInput: 'input[name="email"]',
        passwordInput: 'input[name="password"]',
        loginButton: { selector: '//button[text()="Login"]', locateStrategy: 'xpath' },
        userIcon: 'img[class="Avatar-imgBackground-3Fu2o NavigationAfterLogin-userAvatar-1kbE5"]',

        // Reviews

        // Messages / Inbox









    }
}