import os
import shutil
import json
from datetime import datetime

def load_metadata(metadata_folder):
    metadata_file_path = os.path.join(metadata_folder, 'metadata.json')
    
    if not os.path.isfile(metadata_file_path):
        raise FileNotFoundError(f"Metadata file not found: {metadata_file_path}")
    
    with open(metadata_file_path, 'r') as f:
        return json.load(f)

def create_new_backup_folder(base_path, folder_name):
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    backup_folder = os.path.join(base_path, f"{folder_name}_{timestamp}_backup")
    os.makedirs(backup_folder, exist_ok=True)
    print(f"New backup folder created: {backup_folder}")
    return backup_folder

def save_metadata(backup_folder, folder_path):
    metadata = {'files': {}}
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            metadata['files'][file] = os.path.getsize(file_path)

    metadata_file_path = os.path.join(backup_folder, 'metadata.json')
    with open(metadata_file_path, 'w') as f:
        json.dump(metadata, f, indent=4)
    print(f"Metadata saved to {metadata_file_path}")

def backup_files(backup_folder, folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            relative_path = os.path.relpath(file_path, folder_path)
            backup_path = os.path.join(backup_folder, relative_path)
            os.makedirs(os.path.dirname(backup_path), exist_ok=True)
            shutil.copy2(file_path, backup_path)
    print("Files backed up successfully.")

def check_for_changes(folder_path, old_metadata):
    new_metadata = {'files': {}}
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            new_metadata['files'][file] = os.path.getsize(file_path)
    
    # Compare new metadata with old metadata
    changes_detected = False
    for file, size in new_metadata['files'].items():
        if file not in old_metadata['files'] or old_metadata['files'][file] != size:
            changes_detected = True
            break

    return changes_detected, new_metadata

if __name__ == "__main__":
    base_path = '.'  # Base directory for metadata and backups
    folder_name = 'new'  # Folder name to be checked
    folder_path = r'C:/Users/MV Sai Nischal/Desktop/new'  # Folder path to be checked
    old_metadata_folder = r'C:/Users/MV Sai Nischal/Desktop/backup'  # Folder where old metadata is stored

    try:
        old_metadata = load_metadata(old_metadata_folder)
    except FileNotFoundError as e:
        print(e)
        # Exit or handle missing metadata (e.g., create initial backup)
        exit(1)
    
    changes_detected, new_metadata = check_for_changes(folder_path, old_metadata)
    
    if changes_detected:
        backup_folder = create_new_backup_folder(base_path, folder_name)
        backup_files(backup_folder, folder_path)
        save_metadata(backup_folder, folder_path)
    else:
        print("No changes detected. No new backup created.")
