<script setup>
import HeadBar from './HeadBar.vue';
import SideBar from './SideBar.vue';
import BreadCrumbBar from './BreadCrumbBar.vue';
import ContentSection from './ContentSection.vue';
import FootBar from './FootBar.vue'
</script>

<template>
    <a-layout>
        <HeadBar />
        <a-layout>
            <SideBar />
            <a-layout style="padding: 0 24px 24px">
                <BreadCrumbBar />
                <ContentSection>
                    <RouterView />
                </ContentSection>
                <FootBar />
            </a-layout>
        </a-layout>
    </a-layout>
</template>

<style scoped></style>