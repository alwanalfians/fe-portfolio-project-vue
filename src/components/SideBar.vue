<script setup>
import {
    BookOutlined,
    DashboardOutlined,
    DatabaseOutlined,
    ProfileOutlined,
} from "@ant-design/icons-vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const path = route.path;
const selectedKeys = ref([path.split("/").at(-1)]);
const openKeys = ref(["data"]);
</script>

<template>
    <a-layout-sider width="200" style="background: #fff">
        <a-menu mode="inline" v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys"
            :style="{ height: '100%', borderRight: 0 }">
            <a-menu-item key="dashboard">
                <RouterLink to="/dashboard">
                    <span>
                        <DashboardOutlined />
                        Dashboard
                    </span>
                </RouterLink>
            </a-menu-item>
            <a-sub-menu key="data">
                <template #title>
                    <span>
                        <DatabaseOutlined />
                        Data
                    </span>
                </template>
                <a-menu-item key="educations">
                    <RouterLink to="/data/educations">
                        <span>
                            <BookOutlined />
                            Educations
                        </span>
                    </RouterLink>
                </a-menu-item>
                <a-menu-item key="experiences">
                    <RouterLink to="/data/experiences">
                        <span>
                            <ProfileOutlined />
                            Experiences
                        </span>
                    </RouterLink>
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>
