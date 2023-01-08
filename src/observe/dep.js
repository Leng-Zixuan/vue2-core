let id = 0;
export default class Dep {
    constructor() {
        this.id = id++;
        // 这里存放着当前属性对应的watcher有哪些
        this.subs = [];

    }
    depend() {
        // this.subs.push(Dep.target);
        Dep.target.addDep(this)
    }
    addSub(watcher) {
        this.subs.push(watcher);
    }
    notify() {
        this.subs.forEach(watcher => watcher.update())
    }
}
Dep.target = null;