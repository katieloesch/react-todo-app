import TodoApp from './components/TodoApp/TodoApp';
import styles from './App.module.css';
import ContactIcons from './components/ContactIcons/ContactIcons';

function App() {
  return (
    <div className={styles.App}>
      <TodoApp />
      <ContactIcons />
    </div>
  );
}

export default App;
