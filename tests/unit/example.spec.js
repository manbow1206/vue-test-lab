// import { shallowMount } from '@vue/test-utils';
// import HelloWorld from '@/components/HelloWorld.vue';
const double = (arg) => arg ** 2;

describe('double関数', () => {
  it('引数に2を渡したら4が返却', () => {
    const result = double(2);
    expect(result).toBe(4);
  });
  it('引数に10を渡したら100が返却', () => {
    const result = double(10);
    expect(result).toBe(100);
  });
});

// toBe()
const obj = {
  name: 'Jest Sample',
  num: 12,
};

describe('toBeのサンプル', () => {
  it('objのnumプロパティの値が12', () => {
    expect(obj.num).toBe(12);
  });

  it('objのnameプロパティの値がJest Sample', () => {
    expect(obj.name).toBe('Jest Sample');
  });
});
