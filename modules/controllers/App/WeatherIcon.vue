<template>
    <div>
        <img src="/assets/images/clear.png" class="img-thumbnail" v-if="isClear" alt="Clear"/>
        <img src="/assets/images/cloudy.png" class="img-thumbnail" v-if="isCloudy" alt="Cloudy"/>
        <img src="/assets/images/rain03.png" class="img-thumbnail" v-if="isRain" alt="Rain"/>
    </div>
</template>

<script>
export default {
    name: "WeatherIcon",
    props: ["weatherStatus"],
    data() {
        return {
            isClear: this.weatherStatus === "clear",
            isCloudy: this.weatherStatus === "clouds" || this.weatherStatus === "cloudy",
            isRain: this.weatherStatus === "rain",
        }
    }
}
</script>