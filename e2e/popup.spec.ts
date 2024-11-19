import { test, expect } from "./fixtures";
import { openPopup } from "./pages/popup";

test("Popup counter increments when clicked", async ({ page, extensionId }) => {
  const popup = await openPopup(page, extensionId);
  expect(await popup.getCounterText()).toEqual("count is 0");

  await popup.clickCounter();
  expect(await popup.getCounterText()).toEqual("count is 1");

  await popup.clickCounter();
  expect(await popup.getCounterText()).toEqual("count is 2");

});


test("Popup counter increments when clicked (fake error)", async ({ page, extensionId }) => {
  const popup = await openPopup(page, extensionId);
  expect(await popup.getCounterText()).toEqual("count is 0");

  await popup.clickCounter();
  expect(await popup.getCounterText()).toEqual("count is 1");

  await popup.clickCounter();
  expect(await popup.getCounterText()).toEqual("count is 2");
  await popup.clickCounter();
  expect(await popup.getCounterText()).toEqual("count is 3");

  await popup.clickCounter();
  expect(await popup.getCounterText()).toEqual("count is 4");

});