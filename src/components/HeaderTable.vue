<script setup>
import { PlusOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'

const onSearch = (value) => {
    message.info(`search data: ${value}`)
}

const onCreate = () => {
    message.info('Create new Data')
}
</script>

<template>
    <a-row style="margin-bottom: 16px">
        <a-col :span="12">
            <a-space direction="vertical">
                <a-input-search placeholder="input search text" enter-button allowClear style="width: 300px"
                    @search="onSearch" />
            </a-space>
        </a-col>
        <a-col :span="12">
            <a-button type="primary" style="float: right; width: 150px" @click="onCreate">
                <PlusOutlined />
                Create Data
            </a-button>
        </a-col>
    </a-row>
</template>