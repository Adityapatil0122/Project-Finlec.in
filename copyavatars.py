import shutil

images = [
    ("C:/Users/adity/.gemini/antigravity/brain/02c1e0b8-46fe-44c5-bb96-44f3391af921/avatar_rohan_1773741829715.png", "c:/Users/adity/Downloads/Project-Finlec.in-main/Project-Finlec.in-main/public/images/avatar_rohan.png"),
    ("C:/Users/adity/.gemini/antigravity/brain/02c1e0b8-46fe-44c5-bb96-44f3391af921/avatar_priya_1773741850349.png", "c:/Users/adity/Downloads/Project-Finlec.in-main/Project-Finlec.in-main/public/images/avatar_priya.png"),
    ("C:/Users/adity/.gemini/antigravity/brain/02c1e0b8-46fe-44c5-bb96-44f3391af921/avatar_anand_1773741872956.png", "c:/Users/adity/Downloads/Project-Finlec.in-main/Project-Finlec.in-main/public/images/avatar_anand.png"),
    ("C:/Users/adity/.gemini/antigravity/brain/02c1e0b8-46fe-44c5-bb96-44f3391af921/avatar_rahul_1773741890018.png", "c:/Users/adity/Downloads/Project-Finlec.in-main/Project-Finlec.in-main/public/images/avatar_rahul.png"),
    ("C:/Users/adity/.gemini/antigravity/brain/02c1e0b8-46fe-44c5-bb96-44f3391af921/avatar_sneha_1773741913817.png", "c:/Users/adity/Downloads/Project-Finlec.in-main/Project-Finlec.in-main/public/images/avatar_sneha.png")
]

for src, dst in images:
    shutil.copyfile(src, dst)
    print(f"Copied to {dst}")
