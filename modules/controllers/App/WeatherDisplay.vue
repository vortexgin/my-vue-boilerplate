<template>
    <div class="row" v-if="weatherStatus !== null">
        <div class="col-md-6 mx-auto border p-5">
            <div class="row">
                <div class="col-12 text-center">
                    <WeatherIcon :weather-status="weatherStatus"></WeatherIcon>
                    <h1 class="text-center">{{temperature}}&#176; C</h1>
                    <h3 class="text-center"><i class="fas fa-map-marker-alt"></i> {{location}}</h3>
                </div>
                <div class="col-12">
                    <WeatherDetail :weather-detail="weatherDetail"></WeatherDetail>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WeatherIcon from "./WeatherIcon";
import WeatherDetail from "./WeatherDetail";
export default {
name: "WeatherDisplay",
    components: {WeatherDetail, WeatherIcon},
    props: ["weather", "keyword"],
    data() {
        return {
            weatherStatus: null,
            temperature: null,
            location: null,
            weatherDetail: []
        };
    },
    methods: {
        setWeatherDetail: function (weather) {
            this.weatherDetail = [];
            this.weatherDetail.push({
                temp: weather.main.temp,
                description: weather.weather[0].main
            })
            this.weatherDetail.push({
                temp: weather.main.temp,
                description: weather.sys.country
            })
        }
    },
    watch: {
        weather: function (newVal, oldVal) {
            this.weatherStatus = newVal.weather[0].main.toLowerCase();
            this.temperature = newVal.main.temp;
            this.location = `${this.keyword}, ${newVal.sys.country}`;

            this.setWeatherDetail(newVal);
        }
    }
}
</script>

<style scoped>

</style>