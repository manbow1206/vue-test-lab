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
  description: 'テスト',
};

describe('toBeのサンプル', () => {
  it('objのnumプロパティの値が12', () => {
    expect(obj.num).toBe(12);
  });

  it('objのnameプロパティの値がJest Sample', () => {
    expect(obj.name).toBe('Jest Sample');
  });

  it('objのnameプロパティの値がJest Sample', () => {
    expect(obj.description).toBe('テスト');
  });
});

// toContaine()
const txt = '山田太郎';

describe('toContaine', () => {
  it("txtに'山田'が含まれている", () => {
    expect(txt).toContain('山田');
  });
  it("txtに'太郎'が含まれている", () => {
    expect(txt).toContain('太郎');
  });

  it("txtに'太郎'が含まれている", () => {
    expect(txt).toBe('山田太郎');
  });
});

const arr = [1, 2, 3, 4];
describe('toContain（配列）のサンプル', () => {
  it('arrに数値の2が含まれている', () => {
    expect(arr).toContain(2);
  });

  it("arrに文字列の'2'が含まれていない", () => {
    expect(arr).not.toContain('2');
  });
});
