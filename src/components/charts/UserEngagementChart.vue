<template>
    <apexchart type="line" :options="chartOptions" :series="series" height="300" />
</template>

<script>
import ApexCharts from 'vue3-apexcharts'

export default {
    name: 'UserEngagementChart',
    components: { apexchart: ApexCharts },
    data() {
        return {
            series: [
                {
                    name: 'Active Users',
                    data: [30, 45, 55, 70, 60, 80, 95]
                }
            ],
            chartOptions: {
                chart: { id: 'user-engagement' },
                xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
                stroke: { curve: 'smooth' },
                title: { align: 'left' },
                yaxis: { title: { text: 'Active Users' } },
            }
        }
    }
}
</script>