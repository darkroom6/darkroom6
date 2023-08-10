from alive_progress import alive_bar
import time, logging
import random
import subprocess


# Generate a random integer between 2 and 13 (inclusive)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('Authentication::')

# Ask the user to choose a pwd
with alive_bar(100, ctrl_c=False, title='Authentication::') as bar:
    for i in range(100):
        if i % 33 == 0:
            # Get the current working directory
            current_directory = subprocess.run(["pwd"], capture_output=True, text=True).stdout.strip()
            print(current_directory)
            # The command to run in the new terminal
            command_to_run = f'cd "{current_directory}" && ./ip_inspector.sh'
            # Open a new terminal and run the command
            subprocess.run(["osascript", "-e", f'tell application "Terminal" to do script "{command_to_run}"'])
            break

        # if i % random.randint(3, 13) == 0:
        #     time.sleep(0.6)
        #     print('\n')
        #     logger.warning('Access denied!')
        #     print('\n')
        #     break
            
        bar()
