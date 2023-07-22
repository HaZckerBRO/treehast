import { app, BrowserWindow, screen } from 'electron';
import path from 'path';

// Electron Forge automatically creates these entry points
declare const APP_WINDOW_WEBPACK_ENTRY: string;
declare const APP_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

let appWindow: BrowserWindow;

/**
 * Create Application Window
 * @returns {BrowserWindow} Application Window Instance
 */
export function createAppWindow(): BrowserWindow {
  // Получаем информацию о размерах экрана
  const { width: screenWidth, height: screenHeight } =
    screen.getPrimaryDisplay().workAreaSize;

  // Вычисляем размеры окна
  const windowWidth = Math.min(
    1920,
    Math.max(1280, Math.floor(screenWidth * 0.7)),
  );
  const windowHeight = Math.min(
    1080,
    Math.max(768, Math.floor(screenHeight * 0.8)),
  );

  // Создаем новый экземпляр окна
  appWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#202020',
    // show: false,
    // autoHideMenuBar: true,
    icon: path.resolve('assets/images/appIcon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      preload: APP_WINDOW_PRELOAD_WEBPACK_ENTRY,
      sandbox: false,
    },
  });

  // Загружаем index.html окна приложения
  appWindow.loadURL(APP_WINDOW_WEBPACK_ENTRY);

  // Показываем окно, когда оно будет готово
  appWindow.on('ready-to-show', () => appWindow.show());

  // Закрываем все окна, когда главное окно будет закрыто
  appWindow.on('close', () => {
    appWindow = null;
    app.quit();
  });

  return appWindow;
}
