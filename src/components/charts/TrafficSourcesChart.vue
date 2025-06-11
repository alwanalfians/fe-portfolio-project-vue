<!-- TrafficSourcesChart.vue -->
<template>
    <apexchart type="pie" :options="chartOptions" :series="series" height="300" />
</template>

<script>
import ApexCharts from 'vue3-apexcharts'

export default {
    name: 'TrafficSourcesChart',
    components: { apexchart: ApexCharts },
    data() {
        return {
            series: [45, 25, 15, 15],
            chartOptions: {
                labels: ['Organic Search', 'Social Media', 'Referrals', 'Direct'],
                title: { align: 'left' },
                legend: { position: 'bottom' },
            }
        }
    }
}
</script>