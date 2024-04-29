import { classNames } from './classNames';

describe('classNames', () => {
  test('positive arguments', () => {
    expect(classNames('class1', { mod: true }, ['class2'])).toBe(
      'class1 mod class2'
    );
  });

  test('negative arguments', () => {
    expect(classNames('', { mod: false }, [])).toBe('');
  });
});
