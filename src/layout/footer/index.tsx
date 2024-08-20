import { defineComponent } from 'vue';

import { CopyrightOutlined } from '@ant-design/icons-vue';
import { Layout } from 'ant-design-vue';
import styles from './index.module.less';

const { Footer: ALayoutFooter } = Layout;

export default defineComponent({
  name: 'PageFooter',
  components: { ALayoutFooter },
  setup() {
    return () => (
      <>
        <a-layout-footer class={styles.page_footer}>
          <div class={styles.page_footer_link}>
            <span>谢谢</span>
          </div>
          <div class={styles.copyright}>
            Copyright <CopyrightOutlined /> 2022 vue3-antdv-admin
          </div>
        </a-layout-footer>
      </>
    );
  },
});
