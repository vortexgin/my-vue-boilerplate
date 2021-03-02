<template>
    <div class="row justify-content-center">
        <div class="col-4">
            <div class="form-group">
                <label>Enter location:</label>
                <input class="form-center" v-model="keyword"/>
                <button class="btn btn-primary" :disabled="loading" @click="onButtonClick">Search</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormSearch",
    props: ["loading"],
    data() {
        return {
            keyword: "",
        }
    },
    methods: {
        onButtonClick: function () {
            this.$emit('searched', this.keyword);
        }
    }
}
</script>
