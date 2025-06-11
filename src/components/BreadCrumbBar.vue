<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { capitalizeFirstLetter } from '../helper'

const route = useRoute()

const listPath = computed(() => {
    return route.path.split('/').filter((value) => value !== '').map((item) => {
        return capitalizeFirstLetter(item)
    })
})

</script>

<template>
    <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item v-for="(item, index) in listPath" :key="index">
            {{ item }}
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>