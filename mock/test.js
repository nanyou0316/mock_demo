
// console.log(process.cwd().substring(0,process.cwd().length
// const mockFiles=require('require-all')({
//   dirname:process.cwd().substring(0,process.cwd().length-5)+'/src/views',
//   filter:/viewMock\.js$/
// })
// console.log('mockFiles:',mockFiles);
// for (const file in mockFiles) {
//   if (mockFiles.hasOwnProperty(file)) {
//     console.log(mockFiles[file]['viewMock.js']);
    
//   }
// }
const files=require.context('../src/views',true,/\.*viewMock\.js$/)
export default files