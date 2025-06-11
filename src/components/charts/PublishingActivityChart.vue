<template>
    <apexchart type="bar" :options="chartOptions" :series="series" height="300" />
</template>

<script>
import ApexCharts from 'vue3-apexcharts'

export default {
    name: 'PublishingActivityChart',
    components: { apexchart: ApexCharts },
    data() {
        return {
            series: [
                { name: 'Posts Published', data: [5, 8, 6, 10] }
            ],
            chartOptions: {
                chart: { id: 'publishing-activity' },
                xaxis: { categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'] },
                title: { align: 'left' },
                yaxis: { title: { text: 'Number of Posts' } },
            }
        }
    }
}
</script>