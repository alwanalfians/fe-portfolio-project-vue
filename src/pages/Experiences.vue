<script>
import { ProfileOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import HeaderTable from '../components/HeaderTable.vue';
import { message } from 'ant-design-vue';
import { ref } from 'vue';
import { parseTimestamptzToDateString } from '../helper';
import { colors } from '../colors';
import { listExperiences } from '../mockData/experiences';

const page = ref(1);

const columns = [
    {
        title: "No",
        dataIndex: "no",
        key: "no",
        width: "50px",
        customRender: ({ index }) => (page.value - 1) * 10 + (index + 1),
    },
    {
        title: "Created At",
        dataIndex: "created_at",
        key: "created_at",
        width: "200px",
        customRender: ({ text }) => parseTimestamptzToDateString(text),
    },
    {
        title: "Created By",
        dataIndex: "created_by",
        key: "created_by",
        width: "200px",
    },
    {
        title: "Updated At",
        dataIndex: "updated_at",
        key: "updated_at",
        width: "200px",
        customRender: ({ text }) => parseTimestamptzToDateString(text),
    },
    {
        title: "Updated By",
        dataIndex: "updated_by",
        key: "updated_by",
        width: "200px",
    },
    {
        title: "Company Name",
        dataIndex: "company_name",
        key: "company_name",
        width: "400px",
    },
    {
        title: "Logo",
        dataIndex: "company_logo",
        key: "company_logo",
        width: "100px",
        slots: { customRender: 'logo' },
    },
    {
        title: "Job Title",
        dataIndex: "job_title",
        key: "job_title",
        width: "400px",
    },
    {
        title: "Start Date",
        dataIndex: "start_date",
        key: "start_date",
        width: "200px",
        customRender: ({ text }) => parseTimestamptzToDateString(text),
    },
    {
        title: "End Date",
        dataIndex: "end_date",
        key: "end_date",
        width: "200px",
        customRender: ({ text }) => parseTimestamptzToDateString(text),
    },
    {
        title: "Action",
        dataIndex: "id",
        key: "id",
        width: "250px",
        slots: { customRender: 'action' },
    },
]

const editData = (name) => {
    message.info(`Edit Data ${name}`);
}
const deleteData = (name) => {
    message.info(`Delete Data ${name}`);
}

export default {
    setup() {
        return {
            dataSource: listExperiences,
            columns,
            editData,
            deleteData,
            tagColor: colors[0]
        };
    },
    components: {
        EditOutlined,
        ProfileOutlined,
        DeleteOutlined,
        HeaderTable
    }
}
</script>

<template>
    <a-row style="margin-bottom: 32px;">
        <a-col>
            <a-typography-title :level="2">
                <ProfileOutlined />
                Experiences
            </a-typography-title>
        </a-col>
    </a-row>
    <HeaderTable />
    <a-table :dataSource="dataSource" :columns="columns" :scroll="{ x: 'max-content' }" :rowKey="record => record.id">
        <template #logo="{ text }">
            <a-image :width="50" :src="text" />
        </template>
        <template #action="{ record }">
            <a-space>
                <a-button type="default" @click="() => editData(record.company_name)">
                    <EditOutlined />
                    Edit
                </a-button>
                <a-button danger @click="() => deleteData(record.company_name)">
                    <DeleteOutlined />
                    Delete
                </a-button>
            </a-space>
        </template>
    </a-table>
</template>