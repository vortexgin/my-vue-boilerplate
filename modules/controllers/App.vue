<template>
    <div>
        <Header title="React Weather Apps"/>
        <FormSearch @searched="searchWeather" :loading="formSearchLoading"></FormSearch>
        <WeatherDisplay :keyword="keyword" :weather="weatherResponse"></WeatherDisplay>
    </div>
</template>

<script>
import Header from './Base/Header.vue'
import FormSearch from './App/FormSearch.vue'
import axios from 'axios';
import WeatherDisplay from "./App/WeatherDisplay";

export default {
    name: "App",
    components: {
        WeatherDisplay,
        Header, FormSearch
    },
    data() {
        return {
            formSearchLoading: false,
            keyword: null,
            weatherResponse: null
        }
    },
    methods: {
        searchWeather: function (value) {
            this.formSearchLoading = true;
            this.keyword = value;

            axios({
                method: 'GET',
                url: `https://api.openweathermap.org/data/2.5/weather?q=${this.keyword}&appid=c46897d8dcc20180567abd807995e8d3&units=metric`,
            }).then((response) => {
                this.weatherResponse = response.data;
                this.formSearchLoading = false;
            });
        }
    }
}
</script>

<style scoped>

</style>