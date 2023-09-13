#!/bin/bash

# Function to generate a random IPv4 address
generate_ipv4() {
    echo "$((RANDOM % 256)).$((RANDOM % 256)).$((RANDOM % 256)).$((RANDOM % 256))"
}

# Function to generate a random IPv6 address
generate_ipv6() {
    printf "2001:%04x:%04x:%04x:%04x:%04x:%04x:%04x\n" \
    $((RANDOM % 65536)) $((RANDOM % 65536)) $((RANDOM % 65536)) $((RANDOM % 65536)) \
    $((RANDOM % 65536)) $((RANDOM % 65536)) $((RANDOM % 65536)) $((RANDOM % 65536))
}

# Function to generate random sleep time between 10ms and 100ms
generate_sleep_time() {
    echo "$(jot -r 1 5 10)"
}

# Function to print IPs in five columns
print_ips() {
    printf "%-20s %-20s %-20s %-20s %-20s\n" "${ips[@]}"
}

# Function to display the progress bar
progress_bar() {
    local progress=$1
    local width=50
    local num_chars=$((progress * width / 100))
    local bar=$(printf "%-${width}s" "")
    printf "\r[%-${width}s] %d%%" "${bar// /#}" "$progress"
}

ip_inspector(){
    # Main loop to print 400,000 random IPs
    declare -a ips
    total_ips=400
    progress_step_10=$((total_ips / 10))
    progress_step_50=$((total_ips / 2))
    progress_step_70=$((total_ips * 7 / 10))
    progress_step_90=$((total_ips * 9 / 10))
    current_progress=0

    # Store the progress bar in a variable to display at the bottom
    progress_line=""

    for ((i = 1; i <= total_ips; i++)); do
        # Generate random IP type (IPv4 or IPv6)
        ip_type=$((RANDOM % 2))

        if [ $ip_type -eq 0 ]; then
            ips[0]=$(generate_ipv4)
        else
            ips[0]=$(generate_ipv6)
        fi

        # Generate random sleep time in milliseconds
        sleep_time=$(generate_sleep_time)

        # Convert milliseconds to seconds for the sleep command
        sleep_seconds=$(bc <<<"scale=3; $sleep_time / 700")

        # Print IPs in five columns
        if ((i % 5 == 0)); then
            ips[4]=${ips[0]}
            print_ips
            unset ips
        else
            ips[$((i % 5))]=${ips[0]}
        fi

        # Sleep
        sleep $sleep_seconds

        # Update progress bar
        current_progress=$((i * 100 / total_ips))
        if [ $i -eq $progress_step_10 ] || [ $i -eq $progress_step_50 ] || [ $i -eq $progress_step_70 ] || [ $i -eq $progress_step_90 ]; then
            progress_bar $current_progress
            progress_line="\r[%-${width}s] %d%%" "${bar// /#}" "$current_progress"
            sleep 0.5
        fi
    done

    # Display 100% progress at the bottom
    printf "%s\n" "$progress_line"
}

pwd_mining(){
    echo "Initiating password mining sequence..."
    sleep 0.3
    echo "Searching for vulnerable targets..."
    sleep 0.5
    echo "Scanning network for potential IPs..."

    # Generate and simulate scanning random IPs
    echo "=========================="
    total_ips=35
    for i in $(seq 1 "$total_ips"); do
        ip=$(printf "%d.%d.%d.%d" "$((RANDOM % 256))" "$((RANDOM % 256))" "$((RANDOM % 256))" "$((RANDOM % 256))")
        ip_percentage=$((i * 100 / total_ips))
        echo "$ip_percentage% - Scanning IP: $ip"
        sleep 0.1
    done

    sleep 0.5
    echo "Target acquired. Exploiting weak encryption..."
    sleep 0.1
    echo "Extracting encrypted passwords..."
    sleep 0.2
    echo "Decrypting passwords..."
    sleep 0.5

    # Simulate decrypting passwords
    echo "=========================="
    total_pwd=100
    for i in $(seq 1 "$total_pwd"); do
        password_length=$((RANDOM % 27 + 6)) # Random length between 6 and 32
        password_asterisks=$(printf "%-${password_length}s" "")
        pwd_percentage=$((i * 100 / total_pwd))
       

        # Simulate occasional access denied
        if ((i == 3 || i % 7 == 0 || i % 13 == 0)); then
            echo -n "$pwd_percentage% - Password: ${password_asterisks// /*}"
            echo -n " >> Access denied!"
            echo ""
            sleep 0.2
        else
            echo "$pwd_percentage% - Password: ${password_asterisks// /*}"
        fi
        sleep 0.1
    done
    echo "---------------------------------------------------------------"
    echo "#                       ACCESS GRANTED!                       #"
    echo "---------------------------------------------------------------"
    echo ""
    echo ""
    echo ""
    echo ""
    echo ""
    sleep 5

}

block_greendoor() {
    echo "Initializing security protocol..."
    sleep 1
    echo "Analyzing system vulnerabilities..."
    sleep 1
    echo "Scanning network for potential threats..."
    sleep 1

    # Generate and simulate scanning random IPs
    total_ips=70
    for i in $(seq 1 "$total_ips"); do
        ip=$(printf "%d.%d.%d.%d" "$((RANDOM % 256))" "$((RANDOM % 256))" "$((RANDOM % 256))" "$((RANDOM % 256))")
        ip_percentage=$((i * 100 / total_ips))
        ip_number=$(printf "%02d" "$i") # Add leading zeros for IP numbers < 10
        space_padding=$((15 - ${#ip})) # Calculate the number of leading spaces required
        spaces=$(printf "%*s" "$space_padding" "") # Generate leading spaces
        echo "Scanning IP $ip_number/$total_ips: $spaces$ip [=====>] ($ip_percentage% complete)"
        
        sleep 0.1
    done
    echo "Scanning complete: $total_ips IP addresses analyzed."

    echo "Target locked. Initiating encryption bypass..."
    sleep 1
    echo "Extracting encrypted data packets..."
    sleep 1
    echo "Decrypting secure channels..."
    sleep 1
    echo "Protection process completed."

    # Simulate decrypting passwords
    echo "██▓▓▒▒░░                                                       ░░▒▒▓▓██"
    echo "██▓▓▒▒░░               Chặn GreenDoor thành công!              ░░▒▒▓▓██"
    echo "██▓▓▒▒░░                                                       ░░▒▒▓▓██"
    echo ""
}

find_greendoor() {
    echo "Initializing backdoor scanning protocol..."
    sleep 1
    echo "Analyzing system vulnerabilities..."
    sleep 1
    echo "Scanning network for potential threats..."
    sleep 1
    # Generate and simulate scanning random IPs
    total_ips=45
    for i in $(seq 1 "$total_ips"); do
        ip=$(printf "%d.%d.%d.%d" "$((RANDOM % 256))" "$((RANDOM % 256))" "$((RANDOM % 256))" "$((RANDOM % 256))")
        ip_percentage=$((i * 100 / total_ips))
        ip_number=$(printf "%02d" "$i") # Add leading zeros for IP numbers < 10
        space_padding=$((15 - ${#ip})) # Calculate the number of leading spaces required
        spaces=$(printf "%*s" "$space_padding" "") # Generate leading spaces
        echo "Scanning IP $ip_number/$total_ips: $spaces$ip [=====>] ($ip_percentage% complete)"
        
        sleep 0.1
    done
    echo "Scanning complete: $total_ips IP addresses analyzed."

    echo "Backdoor found..."
    echo "██▓▓▒▒░░                                                       ░░▒▒▓▓██"
    echo "██▓▓▒▒░░         Mở cổng sau để vào GreenDoor? (Yes/No)        ░░▒▒▓▓██"
    echo "██▓▓▒▒░░                                                       ░░▒▒▓▓██"
    echo ""
    read option1
    case $option1 in
        'Y' | 'y' | 'Yes' | 'yes')
        bypass_greendoor
        ;;
    esac
}

bypass_greendoor() {
    echo "Initializing backdoor bypass protocol..."
    sleep 1
    echo "Analyzing system vulnerabilities..."
    sleep 1
    echo "Scanning network for potential threats..."
    sleep 1

    # Generate and simulate scanning random IPs
    total_ips=30
    for i in $(seq 1 "$total_ips"); do
        ip=$(printf "%d.%d.%d.%d" "$((RANDOM % 256))" "$((RANDOM % 256))" "$((RANDOM % 256))" "$((RANDOM % 256))")
        ip_percentage=$((i * 100 / total_ips))
        ip_number=$(printf "%02d" "$i") # Add leading zeros for IP numbers < 10
        space_padding=$((15 - ${#ip})) # Calculate the number of leading spaces required
        spaces=$(printf "%*s" "$space_padding" "") # Generate leading spaces
        echo "Try to logging $ip_number/$total_ips: $spaces$ip [=====>] ($ip_percentage% complete)"
        
        sleep 0.1
    done
    echo "Scanning complete: $total_ips IP addresses analyzed."

    sleep 1
    echo "Backdoor bypass successful. Accessing secure system..."
    sleep 1
    echo "Extracting confidential data packets..."
    sleep 1
    echo "Decrypting secure channels..."
    sleep 1
    echo "Access granted."

    # Simulate decrypting passwords
    echo "██▓▓▒▒░░                                                       ░░▒▒▓▓██"
    echo "██▓▓▒▒░░                  Xin chào Super Admin!                ░░▒▒▓▓██"
    echo "██▓▓▒▒░░                                                       ░░▒▒▓▓██"
    echo ""
    sleep 5

}

ip_delete(){
    # Main loop to print random IPs
    declare -a ips
    total_ips=199
    progress_step_10=$((total_ips / 10))
    progress_step_50=$((total_ips / 2))
    progress_step_70=$((total_ips * 7 / 10))
    progress_step_90=$((total_ips * 9 / 10))
    current_progress=0

    # Store the progress bar in a variable to display at the bottom
    progress_line=""

    for ((i = 1; i <= total_ips; i++)); do
        # Generate random IP type (IPv4 or IPv6)
        ip_type=$((RANDOM % 2))

        if [ $ip_type -eq 0 ]; then
            ips[0]=$(generate_ipv4)
        else
        ips[0]=$(generate_ipv6)
    fi

    # Generate random sleep time in milliseconds
    sleep_time=$(generate_sleep_time)

    # Convert milliseconds to seconds for the sleep command
    sleep_seconds=$(bc <<<"scale=3; $sleep_time / 102")

    # Print IPs in five columns
    if ((i % 3 == 0)); then
        ips[4]=${ips[0]}
        print_ips
        echo "██▓▓▒▒░░                                                       ░░▒▒▓▓██"
        echo "██▓▓▒▒░░                   Xóa IP thành công!                  ░░▒▒▓▓██"
        echo "██▓▓▒▒░░                                                       ░░▒▒▓▓██"
        sleep 5
        unset ips
    else
        ips[$((i % 5))]=${ips[0]}
    fi

    # Sleep
    sleep $sleep_seconds

    # Update progress bar
    current_progress=$((i * 100 / total_ips))
    if [ $i -eq $progress_step_10 ] || [ $i -eq $progress_step_50 ] || [ $i -eq $progress_step_70 ] || [ $i -eq $progress_step_90 ]; then
        progress_bar $current_progress
        progress_line="\r[%-${width}s] %d%%" "${bar// /#}" "$current_progress"
        sleep 0.5
    fi

    done

    # Display 100% progress at the bottom
    printf "%s\n" "$progress_line"

}

# Define a function to generate random phone numbers
phone_numbers() {
    # Initialize an empty array to store the random phone numbers
    local phone_numbers=()
    
    # Array of phone number prefixes
    local prefixes=("09X" "09Y" "09X" "09Z" "09X" "09X" "09X" "092" "03X" "03Y" "03Z")

    # Loop to generate random 7-digit numbers and combine with prefixes
    for prefix in "${prefixes[@]}"; do
        for _ in {1..2}; do
            # Generate a random 7-digit number
            local random_number=$((1000000 + RANDOM % 9000000))
            # Combine with the prefix to form a 10-digit phone number
            local full_number="${prefix}${random_number}"
            # Add to the list of phone numbers
            phone_numbers+=("$full_number")
        done
    done

    # Return the array of phone numbers
    echo "${phone_numbers[@]}"
}

find_location() {
    echo "Initiating location inspector protocol..."
    sleep 1
    echo "Analyzing network for targets..."
    sleep 1
    echo "Scanning for potential coordinates..."
    sleep 1
    
    # Array of fictional phone numbers
    # Call the function to get the list of phone numbers
    phone_numbers_list=($(phone_numbers))

   # Define a function to display a loading bar
    display_loading() {
     
        local length=$1
        local bar=""
        for ((i = 0; i < length; i++)); do
            bar+="▓"
        done
        echo -ne "$bar"
    }

    # Loop through the generated phone numbers
    for phone_number in "${phone_numbers_list[@]}"; do
        # Generate random latitude and longitude
        latitude=$((RANDOM % 180 - 90)).$((RANDOM % 1000000))
        longitude=$((RANDOM % 360 - 180)).$((RANDOM % 1000000))

        # Simulate location inspection
        echo -n "Inspecting location for target: $phone_number ["
        # Display a loading bar with 10 steps
        for ((step = 0; step < 10; step++)); do
            display_loading $step
            sleep 0.1
            echo -ne "\b"
        done
        echo "▓"
        
        echo -n "Target Coordinates: $latitude, $longitude"
        echo ""
        sleep 0.3
    done

    echo "Location inspector protocol complete. Accessing secure system..."
    sleep 1
    echo "Extracting confidential data packets..."
    sleep 1
    echo "Decrypting secure channels..."
    sleep 1
    echo "Access granted."
}

sleep 3
# Ask the user to choose an option
echo "Choose an option:"
echo "1. IP INSPECTOR"
echo "2. REROOT"
echo "3. PWD MINING"
echo "4. BLOCK GREENDOOR"
echo "5. FIND GREENDOOR"
echo "6. FIND LOCATION"
echo "0. BACKUP"
read option

case $option in
    1)
        ip_inspector
        ;;
    2)
        echo "Are you sure to delete? (Y/n)"
        echo "██▓▓▒▒░░                                                       ░░▒▒▓▓██"
        echo "██▓▓▒▒░░           Are you sure to delete? (Y/n)               ░░▒▒▓▓██"
        echo "██▓▓▒▒░░                                                       ░░▒▒▓▓██"

        read option1

        case $option1 in
          'Y' | 'y')
            ip_delete
            ;;
          *)
            echo "Operation canceled."
            ;;
        esac
        ;;
    3)  
        pwd_mining
        ;;
    4)
        block_greendoor
        ;;
    5)
        find_greendoor
        ;;
    6)
        find_location
        ;;
    0)
        echo "Backup option."
        ;;
    *)
        echo "Invalid option."
        exit 1
        ;;
esac