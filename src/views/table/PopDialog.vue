<!-- 弹窗 -->
    <template>
        <el-dialog
        title="参数维护"
        :visible.sync="dialogTableVisible"
        @close="resetForm('form')"
        >
        <el-form
            :model="form"
            :rules="rules"
            ref="form"
            label-width="120px"
            v-loading="dialogLoading"
        >
            <el-form-item prop="id" style="display: none;"></el-form-item>
            <el-form-item label="参数：" prop="paramName">
            <el-input v-model="form.paramName" v-if="dioType !== 1"></el-input>
            <span v-else>{{ form.paramName }}</span>
            </el-form-item>
            <el-form-item label="参数值：" prop="paramValue">
            <el-input v-model="form.paramValue" v-if="dioType !== 1"></el-input>
            <span v-else>{{ form.paramValue }}</span>
            </el-form-item>
            <el-form-item label="参数描述：" prop="paramDesc">
            <el-input
                v-model="form.paramDesc"
                type="textarea"
                resize="none"
                v-if="dioType !== 1"
            />
            <span v-else>{{ form.paramDesc | noData }}</span>
            </el-form-item>
            <el-form-item label="应用范围：" prop="usage">
            <el-select v-model="form.usage">
                <el-option label="运营支撑平台" :value="1"></el-option>
                <el-option label="EPG" :value="2"></el-option>
            </el-select>
            </el-form-item>
            <el-form-item
            label="应用运营商："
            prop="serviceProvider"
            v-if="form.usage === 2"
            >
            <el-select v-model="form.serviceProvider">
                <el-option
                v-for="i in operatorList"
                :key="i.id"
                :value="i.operatorId"
                :label="i.name"
                />
            </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="submitForm('form')">保存</el-button>
            <el-button @click="resetForm('form')">取消</el-button>
        </div>
        </el-dialog>
    </template>