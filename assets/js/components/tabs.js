function switchTabs(nodelist, target, className) {
  nodelist.forEach(node => node.classList.remove(className));
  target.classList.add(className);
}