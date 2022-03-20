import { mount } from '@vue/test-utils';
import FormVue from '../../src/components/Form.vue';

describe('Name of the group', () => {
  it('should ', () => {
    const wrapper = mount(FormVue);
    const input = wrapper.get('input');
    input.setValue('テスト');
    wrapper.trigger('submit');
    console.log(wrapper.emitted('submitForm'));
    expect(wrapper.emitted('submitForm')[0][0]).toEqual('テスト');
  });
});
