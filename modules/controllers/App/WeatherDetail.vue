<template>
    <ul class="list-group">
        <li class="list-group-item border-0" v-for="detail in weatherDetail">
            <span><i class="fas fa-thermometer-three-quarters"></i> {{detail.temp}}&#176; C</span>
            <span class="float-right">{{detail.description}}</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: "WeatherDetail",
    props: ["weatherDetail"]
}
</script>