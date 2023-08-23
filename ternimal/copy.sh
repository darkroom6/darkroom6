#!/bin/bash

num_folders=10
num_files_per_folder=5

function create_folder {
    local level=$1
    local parent_path=$2

    for ((i=1; i<=$num_folders; i++)); do
        local folder_name="folder_$level$i"
        local folder_path="$parent_path/$folder_name"
        
        mkdir -p "$folder_path"

        for ((j=1; j<=$num_files_per_folder; j++)); do
            local file_name="file_$j.txt"
            touch "$folder_path/$file_name"
        done

        if [ $level -gt 1 ]; then
            create_folder "$(($level - 1))" "$folder_path"
        fi
    done
}

top_level="top_level"
mkdir -p "$top_level"
create_folder 3 "$top_level"

echo "Simulating copying data from phone to laptop..."

function simulate_copy {
    local path="$1"

    for file in "$path"/*; do
        if [ -f "$file" ]; then
            echo "Copying $file..."
            sleep 1  # Simulate copying each file for 1 second
        elif [ -d "$file" ]; then
            simulate_copy "$file"
        fi
    done
}

simulate_copy "$top_level"

echo "Data successfully copied from phone to laptop!"
