import { ref, onMounted, onUnmounted } from 'vue';

export default {
  props: {
    phrases: {
      type: [String, Array],
      required: true
    },
    repeatCount: {
      type: Number,
      default: Infinity
    },
    myStyle: {
      type: Object,
      default: () => ({})
    },
    letterStyle: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const terminal = ref(null);
    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let showCursor = true;
    let lines = [];
    let cycleCount = 0;
    let timeoutId = null;

    if (Array.isArray(props.phrases)) {
      lines = props.phrases;
    } else {
      lines = [props.phrases];
    }

    function type() {
      const line = lines[currentLineIndex];

      if (isDeleting) {
        terminal.value.textContent = line.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        if (currentCharIndex === 0) {
          isDeleting = false;
          if (currentLineIndex === lines.length - 1) {
            currentLineIndex = 0;
            // cycleCount++;
          } else {
            currentLineIndex++;
          }
        }
      } else {
        terminal.value.textContent = line.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 250;


        if (currentCharIndex === line.length) {
          cycleCount++;
          isDeleting = true;
          typingSpeed = 100;
          showCursor = false;
        } else {
          showCursor = !showCursor;
        }
      }

      timeoutId = setTimeout(type, typingSpeed);

      setTimeout(() => {
        showCursor = !showCursor;
      }, typingSpeed);

      if (cycleCount === props.repeatCount) {
        clearTimeout(timeoutId);
      }
    }

    onMounted(() => {
      type();
    });

    onUnmounted(() => {
      clearTimeout(type);
    });

    const currentLine = ref(lines[0]);

    return {
      terminal,
      currentLine,
      showCursor
    };
  },
};