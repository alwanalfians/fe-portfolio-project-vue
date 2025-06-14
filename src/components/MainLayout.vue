<script setup>
import {
    HeadBar,
    SideBar,
    BreadCrumbBar,
    ContentSection,
    FootBar
} from './layout';
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
