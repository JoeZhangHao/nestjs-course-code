# 自定义 provider

2 步：

- npm install

- nest start --watch

### Module、service、controller之间的关系
nest使用模块（module）、服务（service）、控制器（controller）之间的交互来组织代码

1. provider是服务提供者，默认都是service后缀，所以我们的provider就是为了给我们要控制的方法（controller）来提供服务的，由于nest是依靠依赖注入来实现在模块中使用服务，所以每个服务（service）都是injectable，我们使用@injectable来标明它是可以被注入的
2. 模块是代码的总体的组织形式，它集成定义service（服务）、控制器（controller）、导入的子模块（imports）、导出对外暴露的服务（exports），所以模块通过@Module标明。我们在根目录发现，通过给nest工厂方法传入模块，整个工程才能得以运行
3. 在模块中我们会使用provider，可能多个service命名挺相近，不易区分，所以我们使用token来标定所要传入的service服务，使用useClass来标明service的主体使用内容
4. 我们在控制器（controller）中若想使用调用服务，那么必须使用其在module里面的provider，所以使用@Inject来注入我们之前所述的provider的token来标定它是哪个provider以及它的class来获取数据