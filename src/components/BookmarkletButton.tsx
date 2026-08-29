import { useRef, type ReactNode } from 'react';
import { BOOKMARKLET } from '../constants/bookmarklet';

interface BookmarkletButtonProps {
  className?: string;
  children: ReactNode;
  onShowDrop?: () => void;
  onHideDrop?: () => void;
}

export function BookmarkletButton({
  className = 'btn btn-primary drag-cta',
  children,
  onShowDrop,
  onHideDrop,
}: BookmarkletButtonProps) {
  const draggingRef = useRef(false);

  return (
    <a
      className={className}
      href={BOOKMARKLET}
      draggable
      onClick={(event) => event.preventDefault()}
      onMouseDown={(event) => {
        if (event.button === 0) onShowDrop?.();
      }}
      onDragStart={(event) => {
        draggingRef.current = true;
        onShowDrop?.();

        try {
          event.dataTransfer.setData('text/uri-list', BOOKMARKLET);
          event.dataTransfer.setData('text/plain', BOOKMARKLET);
          event.dataTransfer.setData(
            'text/html',
            `<a href="${BOOKMARKLET.replace(/"/g, '&quot;')}">FOMO Twitter Tracker</a>`,
          );
          event.dataTransfer.effectAllowed = 'copy';
        } catch {
          // Some browsers restrict drag data.
        }
      }}
      onDragEnd={() => {
        draggingRef.current = false;
        onHideDrop?.();
      }}
      onMouseUp={() => {
        window.setTimeout(() => {
          if (!draggingRef.current) onHideDrop?.();
        }, 80);
      }}
    >
      {children}
    </a>
  );
}
