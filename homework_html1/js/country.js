var countrysH = {};

        function addCountry(countryName, capitalName) {
            countrysH[countryName] = capitalName;
        }

        function deleteCountry(countryName) {
            delete countrysH[countryName];
        }

        function getCountryInfo(countryName) {
            if (countryName in countrysH)
                return 'страна: ' + countryName + ' столица: ' + countrysH[countryName];
            else
                return 'нет информации о стране ' + countryName + '!';
        }

        function listCountrys() {
            var res = "";
            for (var CN in countrysH)
                res += '\n' + getCountryInfo(CN);
            return res;
        }

        addCountry('Германия', 'Берлин');
        addCountry('Венгрия', 'Будапешт');
        addCountry('Франция', 'Париж');

        console.log("список стран:" + listCountrys());

        // my code

        function askCountryName() {
            var countryName = prompt("название страны");
            var capitalName = prompt("столица");
            addCountry(countryName, capitalName);
        }

        function askCountryInfo() {
            var countryName = prompt("название страны");
            var a = getCountryInfo(countryName);
            alert(a);
        }

        function loud() {
            var c = listCountrys();
            alert(c);
        }

        function delCoun() {
            var x = prompt("название страны");
            deleteCountry(x);
            alert("Готово")
        }