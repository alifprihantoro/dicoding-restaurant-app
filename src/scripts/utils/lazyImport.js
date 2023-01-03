export default function lazyImport(name, callback) {
  import(name)
    .then((module) => module.default)
    .then((module) => callback(module))
}
