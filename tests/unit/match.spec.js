import { mount } from '@vue/test-utils';
import Match from '@/components/Match.vue';

describe('test Match Component', () => {
  it('should ', () => {
    const wrapper = mount(Match, {
      props: {
        admin: true,
      },
    });
    const profile = wrapper.find('#admin');
    expect(profile.exists()).toBe(true);
    // console.log(profile.text());
    // expect(wrapper.text()).toBe('Admin');
  });
});
