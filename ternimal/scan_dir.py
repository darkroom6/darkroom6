import argparse
from alive_progress import alive_bar
import time, logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(' >> ')

def pick_target(target_num):
    targets = {
        1: "Checking for Malware on Nga Android Phone",
        2: "Checking for Malware on Phuc iPad",
        3: "Checking for Malware on Phuc iPhone"
    }
    return targets.get(target_num, "Invalid target number")


parser = argparse.ArgumentParser(description="Choose a target for malware checking.")
parser.add_argument("-t", type=int, help="Choose a target (1, 2, or 3)")
args = parser.parse_args()
target = pick_target(args.t)

with alive_bar(100, ctrl_c=False, title=target) as bar:
        for i in range(100):
            if i % 8 == 0:
                time.sleep(0.05)
                logger.info('No malware found..')
            if i == 50:
                time.sleep(0.7)
                logger.info('No malware found..')
            if i == 90:
                time.sleep(0.9)
                logger.info('No malware found..')
            if  ((i == 97 and args.t == 1)
                or (i == 98 and args.t == 2)
                or (i == 99 and args.t == 3)):
                time.sleep(0.6)
                logger.warning('Malware found: GreenDoor')
            else:
                time.sleep(0.02)
            bar()