// 类装饰器
@classDecor
class Example {
  // 属性装饰器
  @attributeDecor
  attribute: string;

  // 访问器装饰器
  @accessorDecor
  get accessor(): string {
    return this.attribute;
  }

  // 方法装饰器
  @functionDecor
  // 参数装饰器
  func(@paramsDecor params: number): number {
    return params;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/ban-types
function classDecor(constructor: Function) {
  //constructor类的构造函数
  console.log('-------------------------------------------------');
  console.log('classDecor is called');
}

function functionDecor(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  console.log('-------------------------------------------------');
  console.log('functionDecor is called');
  // target对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
  console.log('target: ', target);
  // propertyKey成员的名字
  console.log('propertyKey: ', propertyKey);
  // descriptor成员的属性描述符
  console.log('descriptor: ', descriptor);
}
function accessorDecor(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  console.log('-------------------------------------------------');
  console.log('accessorDecor is called');
  // target对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
  console.log('target: ', target);
  // propertyKey成员的名字
  console.log('propertyKey: ', propertyKey);
  // descriptor成员的属性描述符
  console.log('descriptor: ', descriptor);
}
function attributeDecor(target: any, propertyKey: string) {
  console.log('-------------------------------------------------');
  console.log('attributeDecor is called');
  // target对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
  console.log('target: ', target);
  // propertyKey成员的名字
  console.log('propertyKey: ', propertyKey);
}
function paramsDecor(
  // eslint-disable-next-line @typescript-eslint/ban-types
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number,
) {
  console.log('-------------------------------------------------');
  console.log('paramsDecor is called');
  // target对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
  console.log('target: ', target);
  // propertyKey成员的名字
  console.log('propertyKey: ', propertyKey);
  // parameterIndex参数在函数参数列表中的索引
  console.log('parameterIndex: ', parameterIndex);
}

console.log('-------------------------------------------------');
console.log('new Example instance');
new Example();

// attributeDecor is called
// accessorDecor is called
// paramsDecor is called
// functionDecor is called
// classDecor is called
// new Example instance
