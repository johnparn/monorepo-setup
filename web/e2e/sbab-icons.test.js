/**
 * @jest-environment node
 */
const { Chrome } = require('navalia');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
jest.expect.extend({ toMatchImageSnapshot });

describe('Visual Regressions', () => {
  let chrome = null;

  beforeEach(() => {
    chrome = new Chrome();
  });

  afterEach(() => {
    chrome.done();
  });

  // it('should NEVER happen', () => {
  //   return chrome.goto('http://localhost:3000')
  //     .then(() => chrome.screenshot())
  //     .then((image) => expect(image).toMatchImageSnapshot());
  // });

  // const addTodo = async (chrome, nbTodos) => {
  //   for (let i = 0; i < nbTodos; i++) {
  //     await chrome.type('#newTodoInput', `my todo ${i}`)
  //     await chrome.click('#addBtn')
  //     expect(await chrome.exists(`#todo-${i}`)).toBe(true)
  //   }
  // };

  // it.concurrent('should have nothing by default', async () => {
  //   await navalia.run(async (chrome) => {
  //     await chrome.goto('http://localhost:8000')
  //     expect(await chrome.exists('#nothing')).toBe(true)
  //     expect(await chrome.text('#nothing')).toBe('you have nothing to do')
  //   });
  // });

  // it.concurrent('should add todos', async () => {
  //   await navalia.run(async (chrome) => {
  //     await chrome.goto('http://localhost:8000')
  //     await addTodo(chrome, 4)
  //   });
  // });

  // it.concurrent('should add and remove todos', async () => {
  //   await navalia.run(async (chrome) => {
  //     await chrome.goto('http://localhost:8000')
  //     await addTodo(chrome, 1)
  //     await chrome.click('#deleteBtn-0')
  //     expect(await chrome.exists('#todo-0')).toBe(false)
  //     expect(await chrome.exists('#nothing')).toBe(true)
  //   });
  // });
});
