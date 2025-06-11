<script>
import UserEngagementChart from '../components/charts/UserEngagementChart.vue';
import ContentPerformanceChart from '../components/charts/ContentPerformanceChart.vue';
import TrafficSourcesChart from '../components/charts/TrafficSourcesChart.vue';
import PublishingActivityChart from '../components/charts/PublishingActivityChart.vue';
import { ArrowDownOutlined, ArrowUpOutlined, LikeOutlined, DashboardOutlined } from '@ant-design/icons-vue';

export default {
    components: {
        UserEngagementChart,
        ContentPerformanceChart,
        TrafficSourcesChart,
        PublishingActivityChart,
        ArrowDownOutlined,
        ArrowUpOutlined,
        LikeOutlined,
        DashboardOutlined
    }
}
</script>

<template>
    <a-row style="margin-bottom: 32px;">
        <a-col>
            <a-typography-title :level="2">
                <DashboardOutlined />
                Dashboard
            </a-typography-title>
        </a-col>
    </a-row>
    <a-row :gutter="[24, 24]">
        <a-col :span="8">
            <a-card>
                <a-statistic title="Active" :value="11.28" :precision="2" suffix="%" :value-style="{ color: '#3f8600' }"
                    style="margin-right: 50px">
                    <template #prefix>
                        <ArrowUpOutlined />
                    </template>
                </a-statistic>
            </a-card>
        </a-col>
        <a-col :span="8">
            <a-card>
                <a-statistic title="Idle" :value="9.3" :precision="2" suffix="%" class="demo-class"
                    :value-style="{ color: '#cf1322' }">
                    <template #prefix>
                        <ArrowDownOutlined />
                    </template>
                </a-statistic>
            </a-card>
        </a-col>
        <a-col :span="8">
            <a-card>
                <a-statistic title="Feedback" :value="1128" style="margin-right: 50px">
                    <template #prefix>
                        <LikeOutlined />
                    </template>
                </a-statistic>
            </a-card>
        </a-col>
    </a-row>
    <a-divider />
    <a-row :gutter="[24, 24]">
        <a-col class="gutter-row" :span="12">
            <a-card title="User Engagement Over Time">
                <UserEngagementChart />
            </a-card>
        </a-col>
        <a-col class="gutter-row" :span="12">
            <a-card title="Content Performance Distribution">
                <ContentPerformanceChart />
            </a-card>
        </a-col>
        <a-col class="gutter-row" :span="12">
            <a-card title="Publishing Activity & Trends">
                <PublishingActivityChart />
            </a-card>
        </a-col>
        <a-col class="gutter-row" :span="12">
            <a-card title="Traffic Sources Breakdown">
                <TrafficSourcesChart />
            </a-card>
        </a-col>
    </a-row>
</template>