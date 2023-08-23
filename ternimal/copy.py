import os
from alive_progress import alive_bar
import time
import logging
import random
import datetime

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(' >> ')
time.sleep(3)

num_folders = 3
num_files_per_folder = 10

simulated_folders = []

folder_names = ["Đối tượng/Vật hy sinh/Lém"]

def simulate_folder_creation(level, folder_name):
    folder = {'name': folder_name, 'files': []}
    for j in range(1, num_files_per_folder + 1):
        file_extension = random.choice([".png", ".jpg", ".mov", ".mp3"])
        file_type = ""
        
        if file_extension == ".png" or file_extension == ".jpg":
            file_name = f"img_{j}"
            file_type = "image"
        elif file_extension == ".mov":
            file_name = f"video_{j}"
            file_type = "video"
        elif file_extension == ".mp3":
            file_name = f"record_{j}"
            file_type = "audio"
        
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        folder['files'].append(f"{file_name}_{file_type}_{timestamp}{file_extension}")

    simulated_folders.append(folder)

    if level > 1:
        for i in range(1, num_folders + 1):
            subfolder_name = f"{random.choice(folder_names)}/{i}"
            simulate_folder_creation(level - 1, subfolder_name)

top_level = "Đối tượng"
simulate_folder_creation(5, top_level)

print("Copying data from phone...")

def simulate_copy(simulated_folders, target):
    total_files = sum(len(folder['files']) for folder in simulated_folders)
    with alive_bar(total_files, title=target) as bar:
        for folder in simulated_folders:
            for file in folder['files']:
                bar()
                print(f"Copying: /{folder['name']}/{file}")
                time.sleep(.08)  # Simulate copying each file for 0.1 seconds
# Simulate over 2 hours
simulation_duration = 2 * 60 * 60  # 2 hours in seconds
start_time = time.time()

while time.time() - start_time < simulation_duration:
    simulate_copy(simulated_folders, "Copy remaining 2 hours")
    print("Simulating the passage of time...")
    time.sleep(60)  # Sleep for 1 minute before the next iteration

print("Data successfully copied from phone to laptop over 2 hours!")
