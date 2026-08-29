export function KeyboardHint() {
  return (
    <div className="key-rows">
      <div className="key-row">
        <span className="key-os">WINDOWS</span>
        <kbd>Ctrl</kbd>
        <span className="key-plus">+</span>
        <kbd>Shift</kbd>
        <span className="key-plus">+</span>
        <kbd>B</kbd>
      </div>
      <div className="key-row">
        <span className="key-os">MAC</span>
        <kbd>⌘ Cmd</kbd>
        <span className="key-plus">+</span>
        <kbd>Shift</kbd>
        <span className="key-plus">+</span>
        <kbd>B</kbd>
      </div>
    </div>
  );
}
