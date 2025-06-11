<!-- ContentPerformanceChart.vue -->
<template>
    <apexchart type="bar" :options="chartOptions" :series="series" height="300" />
</template>

<script>
import ApexCharts from 'vue3-apexcharts'

export default {
    name: 'ContentPerformanceChart',
    components: { apexchart: ApexCharts },
    data() {
        return {
            series: [
                { name: 'Views', data: [1200, 900, 1400, 700] }
            ],
            chartOptions: {
                chart: { id: 'content-performance' },
                plotOptions: { bar: { horizontal: false, columnWidth: '50%' } },
                xaxis: { categories: ['Articles', 'Videos', 'Blogs', 'Podcasts'] },
                title: { align: 'left' },
                yaxis: { title: { text: 'Views' } },
            }
        }
    }
}
</script>