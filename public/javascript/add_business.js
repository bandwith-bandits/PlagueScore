var addAddress = new Vue({
    el: "#address-input",
    data: {
        bestFit:[{display_name: ""}],
        address: "",
    },
    methods: {
        getAddress: function() {
            console.log("checking out address");
            axios.get(
                `https://nominatim.openstreetmap.org/search?q=${this.address}&format=json&polygon=1&addressdetails=1`
                )
            .then((j) => this.bestFit = j.data)
            .catch((e) => console.log("request failed" + e))
        }
    },
    computed: {
        bestAddress: function() {
            this.getAddress();
            console.log(this.bestFit);
            console.log(this.bestFit[0].display_name);
            return this.bestFit[0].display_name;
        }
    }
})